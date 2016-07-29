declare module "fuse.js" {

    class Fuse {
        constructor(list:any[], options?:Fuse.IFuseOptions);

        search<T>(pattern:string):T[];
    }

    namespace Fuse {
        export interface IFuseOptions {
            id?:string;
            caseSensitive?:boolean;
            include?:string[];
            shouldSort?:boolean;
            searchFn?:any;
            sortFn?:(a:{ score:number }, b:{ score:number }) => number;
            getFn?:(obj:any, path:string) => any;
            keys?:string[] | { name:string; weight:number }[];
            verbose?:boolean;
            tokenize?:boolean;
            location?:number;
            distance?:number;
            threshold?:number;
            maxPatternLength?:number;
        }
    }

    export = Fuse;
}
