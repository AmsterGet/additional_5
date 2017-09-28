module.exports = function check(str, bracketsConfig) {
    var i,k,j,check,metka=false,
        stack=[],
        mas=[];
    for(i=0;i<str.length;i++) {
        k = str.charAt(i);
        for (j = 0; j < bracketsConfig.length; j++) {
            check=bracketsConfig[j][0];
            if (k === check && stack[stack.length-1]===k && check===bracketsConfig[j][1]){
                stack.pop();
                mas.pop();
                metka = true;
            }else {
                if (k === check) {
                    stack.push(k);
                    mas.push(j);
                    metka = true;
                    break;
                }
            }
        }

       if (!metka){
           if (mas[0]===undefined){return false;}
           else {
               if (k === bracketsConfig[mas[mas.length - 1]][1]) {
                   stack.pop();
                   mas.pop();
               }
           }
       }
        metka = false;
  }
  return stack[0]===undefined;
};