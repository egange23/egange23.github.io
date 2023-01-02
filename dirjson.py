import json
import os

imagesdir = os.listdir('images/CJRThrottleSystem')
items_json = json.dumps(imagesdir)


print(items_json)

with open('items.json', 'w') as f:
    f.write(items_json)
