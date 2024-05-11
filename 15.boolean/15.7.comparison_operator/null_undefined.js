// non-strict ==, null and undefined equal but not any other value.
null == undefined; // true
// strict check ===
null === undefined; // false because they are different type
// other comparisons
// null will converted to 0
// undefined will converted to NaN
null > 0; // false
null == 0; // false
null >= 0; // true
