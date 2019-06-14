/**
 * Created by huangjunquan on 2018/4/24.
 */
export default {
        //改变menu
        CHANGE_TABS(state,to){
                var routeName = to.name;
                let order = to.meta.pageOrder;
                for(let key in state.tabs){
                        if(state.tabs[key]['value'] == routeName){
                                state.tabs[key]['active'] = true;
                        }else{
                                state.tabs[key]['active'] = false;
                        }

                }
        },
}