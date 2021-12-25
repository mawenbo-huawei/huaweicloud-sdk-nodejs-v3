import { WebImageWordsBlockList } from './WebImageWordsBlockList';


export class WebImageResult {
    private 'words_block_count': number | undefined;
    private 'words_block_list': Array<WebImageWordsBlockList> | undefined;
    public constructor(wordsBlockCount?: any, wordsBlockList?: any) { 
        this['words_block_count'] = wordsBlockCount;
        this['words_block_list'] = wordsBlockList;
    }
    public withWordsBlockCount(wordsBlockCount: number): WebImageResult {
        this['words_block_count'] = wordsBlockCount;
        return this;
    }
    public set wordsBlockCount(wordsBlockCount: number | undefined) {
        this['words_block_count'] = wordsBlockCount;
    }
    public get wordsBlockCount() {
        return this['words_block_count'];
    }
    public withWordsBlockList(wordsBlockList: Array<WebImageWordsBlockList>): WebImageResult {
        this['words_block_list'] = wordsBlockList;
        return this;
    }
    public set wordsBlockList(wordsBlockList: Array<WebImageWordsBlockList> | undefined) {
        this['words_block_list'] = wordsBlockList;
    }
    public get wordsBlockList() {
        return this['words_block_list'];
    }
}