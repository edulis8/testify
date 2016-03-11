// var assert = chai.assert;
// var should = chai.should();
// var expect = chai.expect;


describe('API integration', function(){
  var server, setupStub, JSONresponse;

  before(function () {
    server = sinon.fakeServer.create();
  });

  after(function () { server.restore(); });

  it('todo.setup receives an array of todos when todo.init is called', function () {

    setupStub = sinon.stub(todo, "setup")

    todo.init()

    server.requests[0].respond(
      200,
      { "Content-Type": "application/json" },
      JSON.stringify([{ name: 'Eat',  done: true},{  name: 'Clean',  done: false}])
    );

    console.log('XXX', setupStub([{name: 'eat', done: false}]) )

  });
});
