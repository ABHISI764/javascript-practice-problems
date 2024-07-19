import * as utility from "./utility.js";


/*
video url: https://www.youtube.com/watch?v=5bcdoXol26o
 Method 1:    
import { multiply } from "./utility.js";
Method 2: 
we can giv new name also like mult
import { multiply as mult } from "./utility.js";
Method 3:
import { mul,add } from "./utility.js";
Method 4: 
using this * as method you can access all from utility
import * as utiltrying from "./utility.js";

*/

const result = utility.mul(2,2,3);
const result1 = utility.add(2,2,3);
console.log(result)
console.log(result1)