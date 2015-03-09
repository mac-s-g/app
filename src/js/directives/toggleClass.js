//this is a simple directive to toggle an elements class onclick
//sample html is below
(function(){
    var app = angular.module('App.directives.toggleClass', []);

    app.directive('toggleClass', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    var elements, selector;
                    //break values on space
                    var classes = attrs.toggleClass.split(' ');
                    for (var i = 0; i < classes.length; i++) {
                        var selector = '[toggle-class-target=' + classes[i] + ']';
                        elements = document.querySelectorAll(selector);
                        if (elements.length > 0) {
                            //transform element into angular element to acess .toggleClass()
                            angular.element(elements).toggleClass(classes[i]);
                        } else {
                            //no specified target element was found
                            //use the element that was clicked
                            element.toggleClass(classes[i]);
                        }
                    }
                });
            }
        };
    });
})();

/* Basic Example to toggle 'active' class:

<button id="btn" toggle-class="active">Change Class</button>

*/

/* Target a foreign element class:

<button id="btn" toggle-class="active">Change Class of Another Element</button>
<div toggle-class-target="active"></div>

*/

/* Toggle Multiple Classes

<button id="btn" toggle-class="active inactive">Toggle Two Classes</button>

*/


