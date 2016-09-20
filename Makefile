MODULES_PATH  := modules
YCAM_MODULES  := mda nsc sps guf lgp cga
SUBMODULES    := $(YCAM_MODULES:%=modules/%-js)
SUBMODULES_GIT:= $(SUBMODULES:%=%/.git)
SOURCES_JS    := $(shell find modules/ -name "*.js" | grep -v /umd/)
PRODUCT_JS    := $(shell find modules/ -name "*.js" | sed 's|-js/|-js/umd/|g')

BUILD_REQ     := $(SUBMODULES_GIT)
BUILD_FILES   := $(SUBMODULES:%=%/.babelrc) $(PRODUCT_JS)
PRODUCT       := $(PRODUCT_JS)


BABEL         := babel

YELLOW           =`tput setaf 11`
GREEN            =`tput setaf 10`
CYAN             =`tput setaf 14`
RED              =`tput setaf 1`
GRAY             =`tput setaf 7`
RESET            =`tput sgr0`

TIMESTAMP       :=$(shell date +'%F')
MAKEFILE_PATH   := $(abspath $(lastword $(MAKEFILE_LIST)))
MAKEFILE_DIR    := $(notdir $(patsubst %/,%,$(dir $(MAKEFILE_PATH))))

.DEFAULT_GOAL   := help
.PHONY          : all build

# -----------------------------------------------------------------------------
#
#  MAIN RULES
#
# -----------------------------------------------------------------------------

all: build


build: $(BUILD_REQ) $(BUILD_FILES) ## Builds $(PRODUCT) files


clean: ## Cleans the build files
	@echo "$(RED)♻  clean: Cleaning $(words $(BUILD_FILES) $(DIST_FILES)) files $(RESET)"
	@git rm -rf modules ; true
	@echo $(PRODUCT) | xargs python -c 'import sys,os;sys.stdout.write("\n".join(_ for _ in sys.argv[1:] if os.path.exists(_)))' | xargs rm  ; true

help: ## Displays a description of the different Makefile rules
	@echo "$(CYAN)★★★ $(PROJECT) Makefile ★★★$(RESET)"
	@grep -E -o '((\w|-)+):[^#]+(##.*)$$'  $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":|##"}; {printf "make \033[01;32m%-15s\033[0m🕮 %s\n", $$1, $$3}'

# -----------------------------------------------------------------------------
#
#  MODULES
#
#p
# -----------------------------------------------------------------------------

modules:

modules/%-js/.git:
	@echo "$(GREEN)«  $@ [GIT]$(RESET)"
	@mkdir -p modules ; true
	@test '!' -e $@ && git submodule add --force git@github.com:YCAMInterlab/$*.js.git `dirname $@` ; true

modules/%/.babelrc: .babelrc modules/%/.git
	@echo "$(GREEN)📝  $@ [BABELRC]$(RESET)" 
	@ln -sfr $< $@

modules/%-js/umd/index.js: modules/%.js/index.js

modules/%.js:
	@echo "$(GREEN)📝  $@ [ES6]$(RESET)"
	@mkdir -p `dirname $@` ; true
	@$(BABEL) $(shell echo $@ | sed 's|/umd/|/|g') > $@
	
	
# === HELPERS =================================================================

rewrite-imports: ## Custom script to convert `require` to `import`
	@echo "$(GREEN)📝  $@ [REWRITE-IMPORTS]$(RESET)"
	@find modules/ -name "*.js" | grep -v /umd/ | xargs python3 bin/require-rewrite.py

print-%:
	@echo $*=
	@echo $($*) | xargs -n1 echo | sort -dr

# EOF
