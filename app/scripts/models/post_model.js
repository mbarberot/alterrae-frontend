/*global Ember*/
SistearthFrontend.Post = DS.Model.extend({
    title: DS.attr('string'),

    body: DS.attr('string'),

    creationDate: DS.attr('string'),

    status: DS.attr('string'),

    author: DS.attr('string')
});

SistearthFrontend.Post.reopen({
    attributes: function () {
        var model = this;
        return Ember.keys(this.get('data')).map(function (key) {
            return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
        });
    }.property()
});

SistearthFrontend.Post.FIXTURES = [
    {
        id: 1,
        title: "News #1",
        body: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them labore sustainable VHS.",
        creationDate: "11 juin 2014",
        status: "published",
        author: "Admin"
    },
    {
        id: 2,
        title: "News #2",
        body: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them labore sustainable VHS.",
        creationDate: "11 juin 2014",
        status: "published",
        author: "Mel"
    },
    {
        id: 15,
        title: "News #3",
        body: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them labore sustainable VHS.",
        creationDate: "11 juin 2014",
        status: "published",
        author: "Dale"
    }
];
