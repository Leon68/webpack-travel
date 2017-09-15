
import $ from 'jquery'
module.exports = function () {
    let goTop = (function () {
        function GoTop(id) {

            this.id = id || 'jrg-gotop';
            console.log('gotop')
            this.init();
        }

        GoTop.prototype = {
            init: function () {
                var $el = $('#' + this.id);
                if ($el.length === 0) {
                    console.log('回到顶部');
                    this.$el = $('<button id="' + this.id + '" style="position: fixed; right: 10px; bottom: 10px; ">回到顶部</button>');
                    $('body').append(this.$el);
                } else {
                    this.$el = $el;
                }
                this.$c = $(document);

                this.bind();
            },

            bind: function () {
                var me = this;

                this.$el.on('click', function () {
                    me.goToTop();
                });

                this.$c.on('scroll', function () {
                    me.scroll();
                });
            },

            goToTop: function () {
                this.$c.scrollTop(0);
            },

            scroll: function (e) {
                var scrollTop = this.$c.scrollTop();
                if (scrollTop > 100) {
                    this.$el.show();
                } else {
                    this.$el.hide();
                }
            }
        }
        return {
            init: function(){
                    new GoTop()

            }
        }
    })();

    return goTop;
};