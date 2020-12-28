//开始的时候有一套配置文件
import defaultSettings from '@/settings';

const title = defaultSettings.title || '';

export default function getPageTitle(pageTitle){
    if(pageTitle){
        return `${pageTitle}-${title}`
    }

    return `${title}`;
}