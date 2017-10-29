/**
* Represents a whois record read error.
* @constructor
* @param {WhoisRecord} object - problematic whois record.
* @param {string} message - explanation.
*/
function WhoisReadException(object, message) {
    this.value=object;
    this.message=message;
    this.toString=this.value+"   "+this.message;
}
