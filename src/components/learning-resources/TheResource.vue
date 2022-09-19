<template>
    <base-card>
            <base-button @click="setSelectedTab('StoredResource')" :mode="storedResButtonMode"> Stored Resources List</base-button>
            <base-button @click="setSelectedTab('AddResource')" :mode="addResButtonMode">Add New Resource</base-button>
    </base-card>

        <keep-alive>
            <component :is="selectedTab"></component>
        </keep-alive>
</template>

<script>
    import StoredResource from './StoredResource.vue'
    import AddResource from './AddResource.vue';
    export default {
        name:"TheResource",
        components:{
            StoredResource,
            AddResource

        },
        data() {
            return {
                selectedTab:'StoredResource',
                storedResources:[
                        {
                            id:'official_guide',
                            tittle:'Official Guide',
                            description:'The official vue js documentation',
                            link:'google.com'
                        },
                        {
                            id:'google',
                            tittle:'Learn Google',
                            description:'Google is best to learn ',
                            link:'google.com'
                        }
                    ]
            }   
        },
        provide() {
            return {
                resources:this.storedResources,
                addResource:this.addResource,


            };  
        },
        computed:{
            storedResButtonMode() {
                return this.selectedTab === 'StoredResource' ? 'null' : 'flat'
            },
            addResButtonMode() {
                return this.selectedTab === 'AddResource' ? 'null' : 'flat'
            }
        },
        methods:{
            setSelectedTab(tab) {
                this.selectedTab = tab;
            },
            addResource(tittle, description, url){
                const newResource = {
                    id:new Date().toISOString(),
                    tittle:tittle,
                    description:description,
                    link:url,
                };
            this.storedResources.unshift(newResource);
            this.selectedTab = 'StoredResource'

            }
        }
    }
</script>