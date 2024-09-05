import os

os.system("""curl -L "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3iYc7eJF6Z6jybt77jeI0WU6qjFiVirHRxfvo8WcZ4dRc5wPNVV7DVK55K8s2wQAyrKZMhqXwaOPO/pub?output=csv" > data/participants.csv""")


from jinja2 import Environment, FileSystemLoader
import csv


csvfile = open('data/participants.csv', newline='')
bedleworeader = csv.DictReader(csvfile)

onsite = {}
onsite_aff = []

online = {}
online_aff = []

for hooman in bedleworeader:
    name = hooman['First name:']
    surname = hooman['Last name']
    aff = hooman['Affiliation: ']
    nsur = name + " " + surname 

    t = hooman['Please select the type of participation in the conference: ']
    if t == "Onsite":
        onsite[nsur] = aff
    else: 
        online[nsur] = aff


environment = Environment(loader=FileSystemLoader("template/"))
template = environment.get_template("participants.html")

cnt = template.render(onsite=onsite.items(), online=online.items())

with open("participants.html", mode="w", encoding="utf-8") as m:
    m.write(cnt)

print("participants.html generated")
