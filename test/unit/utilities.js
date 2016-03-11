var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {


  beforeEach(function () {
    //newTodo = new todo.App({el: '#todo-app', items: ['eat', 'clean']});
  });

  describe('the todo object', function(){
    it('should have all the necessary methods', function(){
      expect(todo.App.prototype.setDone).to.exist;
      todo.App.prototype.should.have.property("render");
      expect(true).to.equal(true);
    });
  });
});

describe('', function () {
  var counter = 0;
  beforeEach(function () {
    counter++;
  });


  describe('the todo.util methods', function() {
    it('should trim whitespace', function () {
      counter.should.equal(1);
      expect(todo.util.trimTodoName('test ')).to.equal('test');
      var hey = todo.util.trimTodoName('hey ');
      assert.lengthOf(hey, 3, "hey should be 3 long bro");
      assert.typeOf(hey, 'string', "hey should be a string bro");

    });
    it('should return a boolean', function () {
      expect(counter).to.be.a("number");
      expect(counter).to.equal(2);
      assert.isBoolean(todo.util.isValidTodoName('clean'), "Should return a boolean");
    });

    it('should return false for an name of one character', function () {
      expect(counter).to.equal(3);

      expect(todo.util.isValidTodoName('e')).to.be.false;
    });

    it('should return true for a name of two or more characters', function () {
      expect(counter).to.equal(4);

      expect(todo.util.isValidTodoName('eat')).to.be.true;
    });

    it('should return an incremented id', function () {
      assert.equal(counter, 5, "Sweeeet");
      assert.isNotBoolean(counter, "Super");

      var firstId = todo.util.getUniqueId();
      var secondId = todo.util.getUniqueId();
      expect(secondId - firstId).to.equal(1);
      secondId.should.not.equal(firstId);
    });
  });
});


