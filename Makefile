MODULES_PATH  := modules
YCAM_MODULES  := mda nsc sps guf lgp cga
SUBMODULES    := $(YCAM_MODULES:%=modules/%.js)
SUBMODULES_GIT:= $(SUBMODULES:%=%/.git)
SOURCES_JS    := $(shell find modules/ -name "*.js" | grep -v /umd/)
PRODUCT_JS    := $(shell find modules/ -name "*.js" | sed 's|.js/|.js/umd/|g')

BUILD_FILES   := $(SUBMODULES_GIT) $(SUBMODULES:%=%/.babelrc) $(PRODUCT_JS)

.PHONY: all build

YELLOW           =`tput setaf 11`
GREEN            =`tput setaf 10`
CYAN             =`tput setaf 14`
RED              =`tput setaf 1`
GRAY             =`tput setaf 7`
RESET            =`tput sgr0`

all: build


build: $(BUILD_FILES)


clean: ## Cleans the build files
	@echo "$(RED)♻  clean: Cleaning $(words $(BUILD_FILES) $(DIST_FILES)) files $(RESET)"
	# @test -e docs && rm -r docs ; true
	# @test -e dist/docs && rm -r dist/docs ; true
	# @test -e $(BUILD) && rm -r $(BUILD) ; true
	# @echo $(DIST_FILES) | xargs rm -f

# -----------------------------------------------------------------------------
#
#  MODULES
#
# -----------------------------------------------------------------------------

modules:
	@mkdir $@

modules/%.js/.git: modules
	@echo "$(GREEN)«  $@ [GIT]$(RESET)"
	@git submodule add --force git@github.com:YCAMInterlab/$*.js.git `dirname $@`

modules/%.js/.babelrc: .babelrc modules/%.js
	@echo "$(GREEN)📝  $@ [BABELRC]$(RESET)"
	@ln -sfr $< $@

modules/%.js/umd/index.js: modules/%.js/index.js

modules/%.js:
	@echo "$(GREEN)📝  $@ [ES6]$(RESET)"
	@mkdir -p `dirname $@` ; true
	@echo "PEOUT "$(shell echo $@ | sed 's|/umd/|/|g') $@
	
# EOF
