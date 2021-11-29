import { contextBridge, ipcRenderer } from 'electron';
import { Message } from '@nx-cross-platform-monorepo/api-interfaces';
import { UiSharedGameBoardModule } from '@nx-cross-platform-monorepo/ui-shared/game-board';
import { UtilSharedModule } from '@nx-cross-platform-monorepo/util-shared';

contextBridge.exposeInMainWorld('electron', {
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  platform: process.platform,
});
