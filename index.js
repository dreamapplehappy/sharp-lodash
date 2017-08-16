import slice from './src/slice';
import chunk from './src/chunk';


function createSharpLodash() {
    return {
        slice: slice,
        chunk: chunk
    }
}

module.exports = createSharpLodash();