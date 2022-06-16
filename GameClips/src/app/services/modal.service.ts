import { Injectable } from '@angular/core';

interface IModal {
  id: string
  visible: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = []

  constructor() { }

  unregisterModal(id: string) {
    this.modals = this.modals.filter(el => el.id !== id)
  }

  registerModal(id: string) {
    this.modals.push({
      id,
      visible: false
    })
  }

  isModalOpen(id: string) : boolean {
    return Boolean(this.modals.find(el => el.id === id)?.visible)    
  }

  toggleModal(id: string) {
    const modal = this.modals.find(el => el.id === id)

    if(modal) {
      modal.visible = ! modal.visible
    }    
  }
}
