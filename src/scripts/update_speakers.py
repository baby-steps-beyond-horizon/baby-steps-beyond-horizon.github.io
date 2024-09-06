import os

os.system("""curl -L "https://docs.google.com/spreadsheets/d/e/2PACX-1vR3xUGAj1R5mvvxQ1TsbBVhbldKFEpPxnkRuIVELXK41I0cFDo-XYBPm2xiKub5j561L6IL4KLhOfcm/pub?output=csv" > data/speakers.csv""")


from jinja2 import Environment, FileSystemLoader
import csv


csvfile = open('data/speakers.csv', newline='')
bedleworeader = csv.DictReader(csvfile)

sp = []

for hooman in bedleworeader:
    name = hooman['name']
    surname = hooman['surname']
    nsur = name + " " + surname 

    aff = hooman['affiliation']
    loc = hooman['location']
    full_aff = aff + ", " + loc 
    
    title = hooman['title']
    abstract = hooman['abstract']

    sp.append({
        "name" : nsur, 
        "title" : title, 
        "abstract" : abstract, 
        "affiliation" : full_aff
        })



environment = Environment(loader=FileSystemLoader("template/"))
template = environment.get_template("speakers.html")

cnt = template.render(speakers=sp)

with open("speakers.html", mode="w", encoding="utf-8") as m:
    m.write(cnt)

print("speakers.html generated")
