const apiurl = {
    idSession : 373003,

    get(name, par) {
        let url = 'https://web.nirax.ru/api/index.php?action=';
        // debugger;
        switch (name) {
            case 'num':
                return get(url + 'getArticlesSearch&idSession=' + this.idSession +
                    '&order=ProductID,%20ManufacturerDescription&FoundString=' + par.searchNumber +
                    '&FoundBy=' + (par.searchType === 'barcode' ? '5' : '1'));
            case 'login':
                return get(url + 'sessionOpen&login=' + par.login +
                    '&password=' + par.password + '&keySoftware=cross');
            case 'demo':
                return get(url + 'sessionOpen&login=infov8.am&password=elbakyan2020it&keySoftware=cross');
            case 'article':
                return get(url + 'getArticle&idSession=' + this.idSession  + '&ID=' + par.id);
            case 'code':
                return get(url + 'getArticle&idSession=' + this.idSession  + '&ID=' + par.id);
            case 'articlecar':
                return get(url + 'getArticlesCar&idSession=' + this.idSession + '&ID=' + par.id);
            case 'attrib':
                return get(url + 'getArticleAttributes&idSession=' + this.idSession + '&ID=' + par.id);
            case 'image':
                return get(url + 'getArticleImages&idSession=' + this.idSession + '&ID=' + par.id);
            case 'product':
                return get(url + 'getProduct&idSession=' + this.idSession + '&ID=' + par.id);
            case 'analCount':
                return get(url + 'getArticlesAnalog&idSession=' + this.idSession + '&ID=' + par.id + '&count=1');
            case 'anal':
                return get(url + 'getArticlesAnalog&idSession=' + this.idSession + '&ID=' + par.id + '&order=ManufacturerDescription,SearchCode');
            case 'autoCount':
                return get(url + 'getCarsArticle&idSession=' + this.idSession + '&ArticleID=' + par.id + '&count=1');
            case 'auto':
                return get(url + 'getCarsArticle&idSession=' + this.idSession + '&ArticleID=' + par.id);
                // +'&limit=' + par.limit + '&offset=' + par.limit * (par.list - 1)
            case 'tree':
                return get(url + 'getTree&idSession=' + this.idSession + '&order=Level, treetype, ParentID' +
                    (par.carid !== 0 ? '&CarID=' + par.carid : ''));
            case 'treeAddProd':
                return get(url + 'getProductsNode&idSession=' + this.idSession + '&variant=1&NodeID=' + par.id +
                    (par.carid !== 0 ? '&CarID=' + par.carid : ''));
            case 'treeProdCount':
                return get(url + 'getArticlesProduct&idSession=' + this.idSession + '&ProductID=' + par.id +
                    (par.carid !== 0 ? '&CarID=' + par.carid : '') + '&count=1');
            case 'treeProd':
                return get(url + 'getArticlesProduct&idSession=' + this.idSession + '&ProductID=' + par.id +
                    (par.carid !== 0 ? '&CarID=' + par.carid : '') + '&limit=' + par.limit + '&offset=' + par.limit * (par.list - 1) +
                    '&order=ManufacturerDescription,DataSupplierArticleNumber');
            case 'brand':
                return get(url + 'getManufacturers&idSession=' + this.idSession +
                    '&TreeType=1&order=Description');
            case 'model':
                return get(url + 'getModelsManufacturer&idSession=' + this.idSession +
                    '&ManufacturerID=' + par.id + '&order=Description');
            case 'carmodel':
                return get(url + 'getCarsModel&idSession=' + this.idSession +
                    '&ModelID=' + par.id + '&order=FullDescription');
            case 'eng':
                return get(url + 'getEnginesManufacturer&idSession=' + this.idSession +
                    '&ManufacturerID=' + par.id + '&order=Code');
            case 'careng':
                return get(url + 'getCarsEngine&idSession=' + this.idSession +
                    '&ManufacturerID=' + par.id + '&Code=' + par.code);
            case 'carvin':
                return get(url + 'vinDecode&idSession=' + this.idSession +
                    '&vin=' + par.code + '&type=2');
            case 'close':
                return get(url + 'sessionClose&idSession=' + this.idSession);
            case 'search':
                return get(url + 'getArticlesSearchCode&idSession=' + this.idSession);
            default:
                return null;
        }

        async function get(url, data = null) {
            if (data) {
                let separ = '?';
                if (typeof data === 'object') {
                    for (let key in data) {
                        url += separ + key + '=' + encodeURIComponent(data[key]);
                        separ = '&';
                    }
                } else url += separ + data;
            }
            let response = await fetch(url);
            let result = await response.json(); // читаем ответ в формате JSON
            return result;
        }
    }
}

export default apiurl;