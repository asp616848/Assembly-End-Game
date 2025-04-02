module.exports = function ({ presenters, Presenter }) {
  class WorkspacePresenter extends Presenter {}
  WorkspacePresenter.type = 'workspace'
  WorkspacePresenter.plural = 'workspaces'
  return WorkspacePresenter
}
