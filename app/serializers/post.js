import DS from "ember-data";

export default DS.RESTSerializer.extend({
    extractFindAll: function (store, type, payload) {
        
        var authors = payload.posts.getEach('author');
        payload.users = authors;
        
        payload.posts.forEach(
            function(item) {
                var author = item.author;
                item.user = author.id;         
            }
        );
        
        console.log(payload);
        
        return this._super.apply(this, arguments);
    }
});