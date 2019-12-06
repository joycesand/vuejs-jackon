<template lang="">
    <div id="SideBar">
        <ul>
            <li> <a href="#" class="btn-md btn-outline-primary">Menu 1</a></li>
            <li> <a href="#" class="btn-md btn-outline-primary">Menu 2</a></li>
            <li> <a href="#" class="btn-md btn-outline-primary">Menu 3</a></li>
        </ul>
        
    </div>
</template>


<script>
    export default {
        name: "SideBar "
    }

</script>

<style>
    #SideBar{
        width:100%;
    }
    .row{
        margin-bottom: 20px;
    }

    li{
        list-style-type:none;
        margin-bottom:4px;
    }

</style>