import slice from './src/slice';
import chunk from './src/chunk';
import compact from './src/compact';


function createSharpLodash() {
    return {
        slice: slice,
        chunk: chunk,
        compact: compact
    }
}

module.exports = createSharpLodash();