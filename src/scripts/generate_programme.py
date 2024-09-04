import json
from jinja2 import Environment, FileSystemLoader

f = open('/home/marudka/baby-steps-beyond-horizon.github.io/data/programme.json')
txt = json.load(f)

environment = Environment(loader=FileSystemLoader("template/"))
template = environment.get_template("programme.html")

cnt = template.render(days=txt)

with open("programme.html", mode="w", encoding="utf-8") as m:
    m.write(cnt)

