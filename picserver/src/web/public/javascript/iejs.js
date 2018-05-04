var console = console || {
    log : function(){
        return false;
    }
};

if(!Array.prototype.indexOf){
    Array.prototype.indexOf=function(o, from){
        var len = this.length;
        from = from || 0;
        from += (from < 0) ? len : 0;
        for (; from < len; ++from){
            if(this[from] === o){
                return from;
            }
        }
        return -1;
    }
};

if(!Array.prototype.remove){
    Array.prototype.remove= function(o){
        var index = this.indexOf(o);
        if(index != -1){
            this.splice(index, 1);
        }
        return this;
    }
};

STRINGEXT={
    byteLen:function(target){  //获取字符串的长度，中文两个字节，其它一个字节
        return target.replace(/[^\x00-\xff]/g,'ci').length;
    },
    truncate:function(target,length,truncation){ //截取字符串，超出默认用'...'表示，truncation是你要超出用什么表示
        length= length || 30;
        truncation = truncation == void(0) ? '...':truncation;
        return target.length > length ? target.slice(0,length-truncation.length) +truncation : String(target);
    },
    camelize:function(target){ //转换为驼峰风格
        if(target.indexOf('-') < 0 && target.indexOf('_') < 0){
            return target;
        }
        return target.replace(/[-_][^_]/g,function(match){
            return match.charAt(1).toUpperCase();
        })
    },
    underscored:function(target){ //转换为下划线风格
        return target.replace(/([a-z\d])([A-Z]+)/g,'$1_$2').replace(/\-/,'_').toLowerCase();
    },
    capitalize:function(target){  //首字母大写
        return target.charAt(0).toUpperCase()+target.substring(1).toLowerCase();
    },
    stripTags:function(target){ //移除字符串中的html标签，但这方法有缺陷，如里面有script标签，会把这些不该显示出来的脚本也显示出来了
        return target.replace(/<[^<]+>/g,'');
    },
    stripScripts:function(target){ //移除字符串中所有的 script 标签。弥补stripTags方法的缺陷。此方法应在stripTags之前调用。
        return target.replace(/<script[^>]*>([\S\s]*?)<\/script>/img, '');
    },
    escapeHTML:function(target){ //将字符串经过 html 转义得到适合在页面中显示的内容, 例如替换 < 为 &lt;
        return target.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    },
    unescapeHTML:function(target){ //还原为可被文档解析的HTML标签
        return target.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&") //处理转义的中文和实体字符
            .replace(/&#([\d]+);/g, function($0, $1) {
                return String.fromCharCode(parseInt($1, 10));
            });
    },
    escapeRegExp:function(target){  //将字符串安全格式化为正则表达式的源码
        return (target + "").replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1");
    },
    pad:function(target,n,filling,right,radix){  ////在左边或者右边补上一些字符,默认为0
        //target不用说了目标string
        //n代表超过多少位或者说字符的个数
        //filling:超出的用什么符号表示默认为0
        //right: true or false 默认是左边
        //radix：转化的进制2-36之间
        var num=target.toString(radix || 10);
        filling = filling || '0';
        while(num.length<n){
            if(!right){
                num=filling+num;
            }else{
                num+=filling;
            }
        }
        return num;
    }
}