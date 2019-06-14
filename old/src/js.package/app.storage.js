
export function set(key,value){
        localStorage.setItem(key,JSON.stringify(value));
}
export function get(key){
        return localStorage.getItem(key);
}
export function remove(key){
        localStorage.removeItem(key);
}
export function clear(){
        localStorage.clear();
}
