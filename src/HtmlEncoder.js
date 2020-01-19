function encode(val) {
    val = val.replace(/&/g, '&amp;');
    val = val.replace(/</g, '&lt;');
    val = val.replace(/>/g, '&gt;');
    val = val.replace(/"/g, '&quot;');
    return val;
};