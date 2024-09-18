import * as _ from 'lodash';


export const lodashStringify = (obj: Record<string, any>): string | undefined => {
    if (_.isNull(obj)) {
        return 'null';
    }
    if (_.isString(obj)) {
        return `\"${obj}\"`;
    }
    if (_.isNumber(obj) || _.isBoolean(obj)) {
        return obj.toString();
    }
    if (_.isArray(obj)) {
        const arrayItems = obj.map(item => lodashStringify(item));
        return `[${arrayItems.join(',')}]`;
    }
    if (_.isObject(obj)) {
        const objectKeys = Object.keys(obj);
        const keyValuePairs = objectKeys.map(key => {
            const keyString = `\"${key}\"`;
            const valueString = lodashStringify(obj[key]);
            return `${keyString}:${valueString}`;
        });
        return `{${keyValuePairs.join(',')}}`;
    }
    return undefined;
}
