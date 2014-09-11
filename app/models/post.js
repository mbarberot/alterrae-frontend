import Ember from "ember";
import DS from "ember-data";

var Post = DS.Model.extend({
    title: DS.attr('string'),
    text: DS.attr('string'),
    created_at: DS.attr('string'),
    author: DS.attr()
});

Post.reopen({
    attributes: function() {
        var model = this;
        return Ember.keys(this.get('data')).map(function(key) {
            return Ember.Object.create({
                model: model,
                key: key,
                valueBinding: 'model.' + key
            });
        });
    }.property()
});

Post.reopenClass({
    FIXTURES: [{
        id: 1,
        title: "News #1",
        text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them labore sustainable VHS.",
        createdAt: "11 juin 2014",
        author: {
            username: "Admin"
        }
    }, {
        id: 2,
        title: "News #2",
        text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them labore sustainable VHS.",
        createdAt: "11 juin 2014",
        author: {
            username: "Mel"
        }
    }, {
        id: 15,
        title: "News #3",
        text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them labore sustainable VHS.",
        createdAt: "11 juin 2014",
        author: {
            username: "Dale"
        }
    }]
});

export
default Post;