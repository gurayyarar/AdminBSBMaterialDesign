  const myData = [
            {
                id: 1,
                parent_id: 0,
                title: 'Branch 1',
                description: 'Description of baranch one',
            },
            {
                id: 2,
                parent_id: 1,
                title: 'Branch 2',
                img: 'images/user.jpg'
            },
            {
                id: 3,
                parent_id: 2,
                title: 'Branch 3',
                description: 'Description of Branch 3',

            },
            {
                id: 4,
                parent_id: 3,
                title: 'Branch 4',
                description: '',

            },
            {
                id: 5,
                parent_id: 4,
                title: 'Branch 5',
                img: 'images/image-gallery/1.jpg',
                description: '<div class="comment-body js-comment-edit-hide">\nTest description</div>',

            },
            {
                id: 6,
                parent_id: 2,
                title: 'Branch 6',

            }, {
                id: 8,
                parent_id: 6,
                img: 'images/image-gallery/13.jpg',
                title: 'Branch 8',
                description: '',

            },
            {
                id: 9,
                parent_id: 3,
                title: 'Branch 9',
                description: '',

            },
            {
                id: 7,
                img: 'images/image-gallery/14.jpg',
                parent_id: 10,
                title: 'Branch 7',

            },

            {
                title: 'Branch 10',
                id: 10,
                parent_id: 9,
                description: '',

            },
        ];

        $(document).ready(function () {
            const input = {
                data: myData,// {}, myData
                options: {
                    imagesUrlPrefix:"../../",
                    modal: {
                        id: "#myModal",
                        ModalDelete: "#myModalDelete",
                        name: "#CatName",
                        description: "#CatDescId",
                        image: "#image"
                    },
                    maxLevel: 10,
                    dataAttributes: {
                        id: 'id__',
                        parent: 'parent__',
                    },
                    dataKeys: {
                        id: 'id',
                        parent: 'parent_id',
                        title: 'title',
                        description: 'description',
                        image: 'img'
                    },icons: {
                        remove: '<i class="material-icons">delete</i>',
                        edit: '<i class="material-icons">edit</i>',
                        add: '<i class="material-icons">add_circle_outline</i>',
                        expand: '<i class="material-icons">add</i>',
                        collapse: '<i class="material-icons">remove</i>',
                    },
                }
                ,
                    serializeOption: {
                        method: "JSON", 
                        serializeON:true,
                        call: "html", 
                        outPuts: {
                            catObj: "#outpuJson",                            
                        }
                    },
            }

            $("#tree").BsNestedSortable(input);

        })