#  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

we can select a single element with the given ID name by getElementById,  and returns an element object or null if not found
  We can select all elements with the given class name by getElementByclassname  and returns a live HTML collection.
 we can Selects the first element that matches a CSS selector by querySelector and returns the element object or null if not found.
 using querySelectorAll Selects all elements that match a CSS selector and returns a static NodeList (does NOT auto-update when the DOM changes)

# How do you create and insert a new element into the DOM?

we can create  an element by document.createElement(tagName):
We insert the element into the page. Common methods are appendChild to add at the end of a parent or use append.

# What is Event Bubbling and how does it work?

Event bubbling is a behaviour in the DOM where an event triggered on a child element automatically “bubbles up” to its parent elements.

# What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where, instead of attaching event listeners to many individual child elements, we attach a single listener to a common parent element. Then, inside that listener, 
We check which child element triggered the event and respond accordingly and it is clear code and efficiency.

#  What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() and stopPropagation() are two different ways to control events in JavaScript.
preventDefault() stops the default action of an element. For example, it can stop a form from submitting or a link from navigating when clicked. The event still bubbles up to parent elements.
stopPropagation() stops the event from bubbling to parent elements. It doesn’t stop the element’s default behaviour. For example, clicking a button won’t trigger the parent’s click handler if we use stopPropagation().
