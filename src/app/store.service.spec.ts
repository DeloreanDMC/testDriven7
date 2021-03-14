import { TestBed } from '@angular/core/testing';

import { StoreService } from './store.service';

describe('StoreService', () => {
  let service: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have method getAll', () => {
    expect(service.getAll).toBeDefined()
  })

  it('should have method getItemById', () => {
    expect(service.getItemById).toBeDefined()
  })

  it('should have method putItem', () => {
    expect(service.putItem).toBeDefined()
  })

  it('should have method deleteItem', () => {
    expect(service.deleteItem).toBeDefined()
  })

  it('should have method addItem', () => {
    expect(service.addItem).toBeDefined()
  })

  it('should be empty at start', () => {
    expect(service.getAll().length).toEqual(0)
  })

  it('should add item', () => {
    expect(service.getAll().length).toEqual(0)
    service.addItem({data:'test'})
    expect(service.getAll().length).toEqual(1)
  })

  it('should generate Id', () => {
    expect(service.addItem({data:'test'})).toBeGreaterThan(0)
  })

  it('should find element by id', () => {
    const mock = {data:'test'}
    const id = service.addItem(mock)
    const found =  service.getItemById(id)
    expect(found.body).toEqual(mock)
    expect(found.id).toEqual(id)
  })

  it('should not find element by incorrect id', () => {
    expect(service.getItemById('incorrect')).toBeUndefined()
  }) 

  it('should not put not existed item', () => {
    expect(service.putItem(1,{newData:'test'})).toBeFalse()
  })

  it('should put exists item', () => {
    const mock = {data:'test'}
    const id = service.addItem(mock)
    expect(service.putItem(id, {data:'test2'})).toBeTrue()
    expect(service.getItemById(id).body.data).toEqual('test2')
  })

  it('should not delete not existed item', () => {
    service.deleteItem(1).toBeFalse()
  })

  it('should delete existed item', () => {
    const mock = {data:'test'}
    const id = service.addItem(mock)
    service.deleteItem(id).toBeTrue()
    expect(service.getAll().length).toEqual(0)
  })  
});
