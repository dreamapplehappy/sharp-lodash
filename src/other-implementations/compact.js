/* 使用数组的map方法 */

function compact(array) {
    // 判断array是否为空
    if(array == null) {
        return [];
    }

    let result = [];

    array.map((value) => {
        if(value) {
            result.push(value);
        }
    });

    return result;
}