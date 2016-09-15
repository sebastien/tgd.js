MODULES_PATH  := modules
YCAM_MODULES  := mda nsc sps guf lgp cga
SUBMODULES    := $(YCAM_MODULES:%=modules/%.js)

.PHONY: all build

YELLOW           =`tput setaf 11`
GREEN            =`tput setaf 10`
CYAN             =`tput setaf 14`
RED              =`tput setaf 1`
GRAY             =`tput setaf 7`
RESET            =`tput sgr0`

all: build


build: $(SUBMODULES)


clean: ## Cleans the build files
	@echo "$(RED)♻  clean: Cleaning $(words $(BUILD_FILES) $(DIST_FILES)) files $(RESET)"
	# @test -e docs && rm -r docs ; true
	# @test -e dist/docs && rm -r dist/docs ; true
	# @test -e $(BUILD) && rm -r $(BUILD) ; true
	# @echo $(DIST_FILES) | xargs rm -f

modules/%.js:
	@echo "$(GREEN)«  $@ [GIT]$(RESET)"
	@mkdir -p `dirname $@` ; true
	@git submodule add git@github.com:YCAMInterlab/$*.js.git $@

# EOF
