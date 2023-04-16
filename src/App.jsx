import { useState } from 'react'
import './App.css'

function App() {
  const [code, setCode] = useState('');

  function handleChange(event) {
    setCode(event.target.value);
  }

  function handleDefault() {
    setCode(`// Use the output builtin.
%builtins output

// Import the serialize_word() function.
from starkware.cairo.common.serialize import serialize_word

func main{output_ptr: felt*}() {
    // Output 100 by calling serialize_word.
    serialize_word(100);
    // Output 200.
    serialize_word(200);
    // Output 300.
    serialize_word(300);
    // Return.
    return ();
}`);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: submit code to compiler
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Enter Cairo code
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <textarea
                id="code"
                name="code"
                rows={10}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter your Cairo code here..."
                value={code}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Compile
            </button>
            <button className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600" onClick={handleDefault}>
              Use Default
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App
