import re, sys
RE_EXPORT = re.compile("\s*module.exports\s*=\s*(.+)$")

class Catalogue:

	def parse( self, path ):
		name = path.split("umd/", 1)[-1].rsplit(".", 1)[0].split("/")
		#print name
		with open(path, "r") as f:
			for l in f.readlines():
				m = RE_EXPORT.match(l)
				if m:
					print m.group(1)

if __name__ == "__main__":
	cat = Catalogue()
	for _ in sys.argv[1:]:
		cat.parse(_)

# EOF
