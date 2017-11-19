import {renderComponent, epect} from '../test_helper';
import App from '../../src/App';

describe('App', ()=> {
  let component;

  beforeEach(()=>{
    component= renderComponent(App);
  });

  it('render something', ()=> {
    expect(component).to.exist;
  });
  
})
