

/*
 import Login from '../views/Login.vue';
 import MainIndex from '../views/MainIndex.vue';
 import MainResource from '../views/MainResource.vue';
 import MainTesting from '../views/MainTesting.vue';
 import MainUser from '../views/MainUser.vue';

 import SubAtten from '../views/SubAtten.vue';
 import SubAttenDetail from '../views/SubAttenDetail.vue';
 */
const Home = r => require.ensure([], () => r(require('@/views/Home.vue')), 'Home');
const HomeIndex = r => require.ensure([], () => r(require('@/views/HomeIndex.vue')), 'HomeIndex');
const HomeConnect = r => require.ensure([], () => r(require('@/views/HomeConnect.vue')), 'HomeConnect');
const HomeAdvantage = r => require.ensure([], () => r(require('@/views/HomeAdvantage.vue')), 'HomeAdvantage');
const HomeCommission = r => require.ensure([], () => r(require('@/views/HomeCommission.vue')), 'HomeCommission');
const HomePlan = r => require.ensure([], () => r(require('@/views/HomePlan.vue')), 'HomePlan');
const HomeTeams = r => require.ensure([], () => r(require('@/views/HomeTeams.vue')), 'HomeTeams');
const HomeTypes = r => require.ensure([], () => r(require('@/views/HomeTypes.vue')), 'HomeTypes');

// others
const Admission = r => require.ensure([], () => r(require('@/views/Admission.vue')), 'Admission');

export default  [
  {path: '*', redirect: '/Admission'},
  {path: '/', redirect: '/Admission'},
  { path: '/Home', name: 'Home', component:Home   , meta:{ keepAlive:true ,title:"",isLogin:true },
    children:[
      {  path: 'Index', name: 'HomeIndex', component:HomeIndex   , meta:{ keepAlive:true ,title:"首页",isLogin:true } },
      {  path: 'Plan', name: 'HomePlan', component:HomePlan   , meta:{ keepAlive:true ,title:"解决方案",isLogin:true } },
      {  path: 'Advantage', name: 'HomeAdvantage', component:HomeAdvantage   , meta:{ keepAlive:true ,title:"核心优势",isLogin:true } },
      {  path: 'Types', name: 'HomeTypes', component:HomeTypes   , meta:{ keepAlive:true ,title:"渠道种类",isLogin:true } },
      {  path: 'Commission', name: 'HomeCommission', component:HomeCommission   , meta:{ keepAlive:true ,title:"佣金规则",isLogin:true } },
      {  path: 'Teams', name: 'HomeTeams', component:HomeTeams   , meta:{ keepAlive:true ,title:"力量支持",isLogin:true } },
      {  path: 'Connect', name: 'HomeConnect', component:HomeConnect   , meta:{ keepAlive:true ,title:"联系我们",isLogin:true } },
    ]
  },
  {  path: '/Admission', name: 'Admission', component:Admission   , meta:{ keepAlive:true ,title:"商户入驻",isLogin:false } }

]
