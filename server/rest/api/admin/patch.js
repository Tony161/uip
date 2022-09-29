import {DB} from '../../../index.js';

const patchTask = async (req, res) => {
    let {body, params} = req;
    console.log('@@@@@ body', body, params.id)
    let result = false;
    if (params.id !== undefined) {
        result = DB.update(+params.id, body);
    }
    return res.json({success: result});
};

export default patchTask;