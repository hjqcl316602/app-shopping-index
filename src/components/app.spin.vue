<template>
    <div class="va-spin" :style="styleName">
        <template v-if="type == 'dots'">
            <svg viewBox="0 0 64 64">
                <g>
                    <circle cx="16" cy="32" stroke-width="0" r="3.47778">
                        <animate attributeName="fill-opacity" dur="750ms" values=".5;.6;.8;1;.8;.6;.5;.5"
                                 repeatCount="indefinite"></animate>
                        <animate attributeName="r" dur="750ms" values="3;3;4;5;6;5;4;3"
                                 repeatCount="indefinite"></animate>
                    </circle>
                    <circle cx="32" cy="32" stroke-width="0" r="3">
                        <animate attributeName="fill-opacity" dur="750ms" values=".5;.5;.6;.8;1;.8;.6;.5"
                                 repeatCount="indefinite"></animate>
                        <animate attributeName="r" dur="750ms" values="4;3;3;4;5;6;5;4"
                                 repeatCount="indefinite"></animate>
                    </circle>
                    <circle cx="48" cy="32" stroke-width="0" r="3.52222">
                        <animate attributeName="fill-opacity" dur="750ms" values=".6;.5;.5;.6;.8;1;.8;.6"
                                 repeatCount="indefinite"></animate>
                        <animate attributeName="r" dur="750ms" values="5;4;3;3;4;5;6;5"
                                 repeatCount="indefinite"></animate>
                    </circle>
                </g>
            </svg>
        </template>
        <template v-if="type=='crescent'">

            <svg viewBox="0 0 1024 1024" version="1.1" p-id="1903" height="100%" width="100%" >
                <path d="M511.573 0.853C233.067 0.853 6.55 223.445 0.15 500.416 6.06 258.731 189.824 64.811 415.66 64.811c229.546 0 415.658 200.426 415.658 447.616 0 52.97 42.944 95.936 95.915 95.936 52.95 0 95.915-42.966 95.915-95.936C1023.147 229.888 794.112 0.853 511.573 0.853z m0 1023.147c278.507 0 505.024-222.592 511.403-499.563-5.888 241.664-189.653 435.627-415.488 435.627-229.547 0-415.659-200.448-415.659-447.637 0-52.95-42.965-95.915-95.936-95.915C42.965 416.512 0 459.456 0 512.427 0 794.965 229.035 1024 511.573 1024z"
                      p-id="1904">
                    <animateTransform  attributeName="transform"   type="rotate" from="0 512 512" to = "360 512 512" dur="1.2s" degin="0s" values="0 512 512; 120 512 512; 360 512 512" calcMode="paced"   repeatCount="indefinite"></animateTransform>
                </path>
            </svg>
        </template>
        <template v-if="type == 'lines'">
            <svg viewBox="0 0 64 64"  >
                <g stroke-width="7" stroke-linecap="round">
                    <line x1="10" x2="10" y2="36.5555" y1="27.4445" >
                        <animate attributeName="y1" dur="750ms" values="16;18;28;18;16;16"
                                 repeatCount="indefinite"></animate>
                        <animate attributeName="y2" dur="750ms" values="48;46;36;44;48;48"
                                 repeatCount="indefinite"></animate>
                        <animate attributeName="stroke-opacity" dur="750ms" values="1;.4;.5;.8;1;1"
                                 repeatCount="indefinite"></animate>
                    </line>
                    <line x1="24" x2="24" y2="46.1111" y1="17.8889">
                        <animate attributeName="y1" dur="750ms" values="16;16;18;28;18;16"
                                 repeatCount="indefinite"></animate>
                        <animate attributeName="y2" dur="750ms" values="48;48;46;36;44;48"
                                 repeatCount="indefinite"></animate>
                        <animate attributeName="stroke-opacity" dur="750ms" values="1;1;.4;.5;.8;1"
                                 repeatCount="indefinite"></animate>
                    </line>
                    <line x1="38" x2="38" y2="48" y1="16">
                        <animate attributeName="y1" dur="750ms" values="18;16;16;18;28;18"
                                 repeatCount="indefinite"></animate>
                        <animate attributeName="y2" dur="750ms" values="44;48;48;46;36;44"
                                 repeatCount="indefinite"></animate>
                        <animate attributeName="stroke-opacity" dur="750ms" values=".8;1;1;.4;.5;.8"
                                 repeatCount="indefinite"></animate>
                    </line>
                    <line x1="52" x2="52" y2="47.7778" y1="16.1111">
                        <animate attributeName="y1" dur="750ms" values="28;18;16;16;18;28"
                                 repeatCount="indefinite"></animate>
                        <animate attributeName="y2" dur="750ms" values="36;44;48;48;46;36"
                                 repeatCount="indefinite"></animate>
                        <animate attributeName="stroke-opacity" dur="750ms" values=".5;.8;1;1;.4;.5"
                                 repeatCount="indefinite"></animate>
                    </line>
                </g>
            </svg>
        </template>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        components: {},
        beforeRouteEnter (to, from, next) {
            next(vm=> {
            })
        },
        beforeRouteLeave(to, from, next){
            next();
        },
        beforeRouteUpdate (to, from, next) {
            next();
        },
        beforeCreate(){
        },
        created(){
        },
        beforeMount(){
        },
        mounted(){
        },
        activated(){
        },
        computed: {
            styleName(){
                let style = {};
                if (this.size) {
                    style['width'] = this.size;
                    style['height'] = this.size;

                }
                if (this.fill) {
                    style['fill'] = this.fill;
                }
                if (this.stroke) {
                    style['stroke'] = this.stroke;
                }
                return style;

            }
        },
        props: {
            type: String,
            size: String,
            fill:String,
            stroke:String
        },
        data(){
            return {}
        },
        methods: {},
    }
</script>

<style scoped></style>
