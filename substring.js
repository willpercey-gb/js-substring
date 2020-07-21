const substring = (document, start, end) => {
    let start_pos = document.indexOf(start);
    let end_pos = document.indexOf(end);
    if (start_pos === -1){
        start_pos = 0;
    }
    else{
        start_pos += start.length;
    }
    if (end_pos === -1){
        end_pos = 0;
    }
    return document.substring(start_pos, end_pos);
};

export default {substring};