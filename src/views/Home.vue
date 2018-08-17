<template>
    <div class="home">
        <v-container grid-list-md text-xs-center v-bind="{ fluid: true } ">
            <v-layout row wrap>
                <v-flex sm12>
                    <h1>List of Users</h1>
                    <template>
                        <v-data-table :headers="headers" :items="users" class="elevation-1">
                            <template slot="headerCell" slot-scope="props">
                                <span>
                                    {{ props.header.text }}
                                </span>
                            </template>
                            <template slot="items" slot-scope="props">
                                <td class="text-xs-left">{{ props.item.id }}</td>
                                <td class="text-xs-left">{{ props.item.name }}</td>
                                <td class="text-xs-left">{{ props.item.username }}</td>
                                <td class="text-xs-left">{{ props.item.email }}</td>
                                <td class="text-xs-left">{{ props.item.address.street }} {{ props.item.address.suite }} {{ props.item.address.city }}</td>
                                <td class="text-xs-left">{{ props.item.address.zipcode }}</td>
                                <td class="text-xs-left">{{ props.item.phone }}</td>
                                <td class="text-xs-left">{{ props.item.website }}</td>
                                <td class="text-xs-left">{{ props.item.company.name }}</td>
                            </template>
                        </v-data-table>
                    </template>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'home',
        components: {

        },
        data: function () {
            return {
                headers: [{
                        text: 'ID',
                        align: 'left',
                        sortable: true,
                        value: 'name'
                    },
                    {
                        text: 'Name',
                        value: 'name',
                        align: 'left',
                        sortable: false,
                    },
                    {
                        text: 'Username',
                        value: 'username',
                        align: 'left',
                        sortable: false,
                    },
                    {
                        text: 'Email',
                        value: 'email',
                        align: 'left',
                        sortable: false,
                    },
                    {
                        text: 'Address',
                        value: 'address',
                        align: 'left',
                        sortable: false,
                    },
                    {
                        text: 'Zipcode',
                        value: 'zipcode',
                        align: 'left',
                        sortable: false,
                    },
                    {
                        text: 'Phone',
                        value: 'phone',
                        align: 'left',
                        sortable: false,
                    },
                    {
                        text: 'Website',
                        value: 'website',
                        align: 'left',
                        sortable: false,
                    },
                    {
                        text: 'Company',
                        value: 'company',
                        align: 'left',
                        sortable: false,
                    }
                ],
                users: []
            }
        },
        created: function () {
            this.loadNames();
        },
        methods: {
            loadNames: function () {
                axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
                    var usersRetrieve = (response.data);
                    // var usersItems = [];
                    // for(var i = 0; i < users.length; i++ ){
                    //     var tempItems = {
                    //         "id": users[i].id,
                    //         "name": users[i].name,
                    //         "username": users[i].username,
                    //         "email": users[i].email,
                    //         "website": users[i].website
                    //     };

                    //     usersItems.push(tempItems);
                    // }

                    this.users = usersRetrieve;
                })
            }
        }
    }
</script>