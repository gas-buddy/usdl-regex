usdl-regex
==========

[![wercker status](https://app.wercker.com/status/50fd960ab71deb402345dddc7c3a5ee4/s/master "wercker status")](https://app.wercker.com/project/byKey/50fd960ab71deb402345dddc7c3a5ee4)

Node package for validating US Drivers License numbers. Based on other similar language modules which originate from https://ntsi.com/drivers-license-format/

Usage
=========
## isValid(state, DLNumber)
Pass in a State and a DL Number and it'll validate if it's true or false
```
  const { isValid } = require('usdl-regex');

  const state = 'CA';

  const truthyResult = isValid(state, 'F1112001');
  // returns true

  const falsyResult = isValid(state, 'ABC1112001');
  // returns false
```

## isValidOrReturnDescription(state, DLNumber)
Pass in a State and a DL Number and it'll validate if it's true or false.
If it is "false", then it will return a description on what it expects
```
  const { isValidOrReturnDescription } = require('usdl-regex');

  const state = 'CA';

  const truthyResult = isValidOrReturnDescription(state, 'F1112001');
  // returns true

  const falsyResult = isValidOrReturnDescription(state, 'ABC1112001');
  // returns ["1 Alpha + 7 Numeric"]
```

CHANGELOG
=========
# 1.5.3
- Add new OR patter from evidence of valid licenses

# 1.5.2
- Add new MO pattern from evidence of valid licenses, even though I cannot find a spec to say why

# 1.4.2
- Fix Massachsetts to accept new DL format starting with "SA"
- Fixed small readme issues

# 1.4.0
- Added a new method "isValidOrReturnDescription" to return description on falsy validation
- Fixed some test cases
- Edit README to contain "Usage" instructions

# 1.0.3
Fix Nebraska regex to allow 1Alpha+6-8Numeric

# 1.0.2
Fix Oregon to allow A+6Numeric

# 1.0.1
Fix Kentucky regex type from A_Z to A-Z
