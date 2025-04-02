module.exports = function ({ presenters, Presenter }) {
  class ContactPresenter extends Presenter {
    attributes(contact) {
      if (contact.workspaceId) {
        contact.workspace = {
          id: contact.workspaceId,
        }
        delete contact.workspaceId
      }
      if (contact.categoryIds?.length) {
        contact.categories = contact.categoryIds.map((id) => ({ id }))
        delete contact.categoryIds
      }
      const s = super.attributes(contact)
      return s
    }
    relationships() {
      return {
        workspace: presenters.WorkspacePresenter,
        categories: presenters.CategoryPresenter,
      }
    }
  }
  ContactPresenter.type = 'contact'
  ContactPresenter.plural = 'contacts'
  return ContactPresenter
}
