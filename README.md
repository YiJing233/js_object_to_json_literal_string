# js_object_to_json_literal_string

to get json literal string rather than native JSON.stringify result


## Example

- ❌ simple JSON.stringify: `{"avatar":"https://ui-avatars.com/api/?size=128","name":"nihao","info":{"label":"nihao","value":"1234reffdsfaf","avatar_url":"https://ui-avatars.com/api/?size=128"}}`
- ✅ if you use js_object_to_json_literal_string: `"{\"avatar\":\"https://ui-avatars.com/api/?size=128\",\"name\":\"nihao\",\"info\":{\"label\":\"nihao\",\"value\":\"1234reffdsfaf\",\"avatar_url\":\"https://ui-avatars.com/api/?size=128\"}}"`