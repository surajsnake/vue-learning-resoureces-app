<!-- div is replaced with BaseCard component which is used as layout -->
<template>
    <li>
        <BaseCard>
            <header>
                <h3> {{ tittle }}</h3>
                <base-button mode="flat">Delete</base-button>
            </header>
      
            <p> {{ description }} </p>
            <nav>
                
                <a :href="link">view Resources</a>
            </nav>
        </BaseCard>
    </li>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseCard from "../UI/BaseCard.vue";
    export default{
    //accepting the props values from parent component
    props: ["tittle", "description", "link"],
    components: { BaseCard, BaseButton }
}
</script>
<!-- 
//if we add the scoped with style that means that sytle will we implement on that page only
//if we will not add the scoped with style then that style will be implement on all the application or all the pages automatically
 -->
<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>