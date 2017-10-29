/**
* Represents a whois record
* @constructor
* @param {string} input - Raw whois data (with newlines).
* @return {WhoisRecord} an object, which represents serialized whois data.
*/
function WhoisRecord(input) {
  if(typeof input=="string") { //check input type
    if(input.length<3) { //check input length, mustn't be less than three (a:b).
      throw new WhoisReadException(input, "input is empty or corrupt!");
    }
    var this_record=this; //link to this
    input.replace(/>>>[\s\S]*/gi,"").replace(/#.*/gi,"") //remove all coments and optional information
    .split("\n").forEach(function(record){ //iterate over an array of values
        this_record[record.split(": ")[0]]=record.split(":")[1]; //add key with value to this
    });
    delete records; //remove unnescesary variable
  } else {
    throw new WhoisReadException(input, "input is "+typeof input+" but string expected!");
  }
}
