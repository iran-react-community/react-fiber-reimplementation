## React Fiber Re-Implementation

#### This is only for the sake of experimentation!

I have re-implemented this based on some resources, some of which are included in
the project, as well. Before React 16, the idea of Virtual Dom was at React core and 
was heavily consumed by the community. As of React 16, the library benefits from 
something called fiber, a new feature built on top of functional programming paradigms
(e.g. effects, handlers, coroutines) that actually is a re-implementaion of Stack.
Therefore, a fiber is a virtual stack frame, meaning besed on some priority,
stack frames can be manipulated (push or pop) when each update meets a deadline,
performing work at a later time. This is just a brief overview. I assume you are
familiar with the core concepts. Last but not least, of all React functionality,
class component with only one lifecycle method (setState) is built. Feel free
to mess around with it!

##### Steps:

1. clone to this repository
2. cd into the repo
3. npm install
4. npm start
