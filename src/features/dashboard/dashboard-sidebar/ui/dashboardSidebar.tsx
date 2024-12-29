'use client';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@radix-ui/react-collapsible';
import { FC } from 'react';
import { useState } from 'react';
import { CiStreamOn } from 'react-icons/ci';
import { IoAnalytics, IoSettings } from 'react-icons/io5';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarProvider
} from '@/shared/ui/ui/sidebar';

import { TDashboardTabs } from '@/widgets/dashboard/ui';

const items = [
  {
    title: 'Аналитика',
    icon: IoAnalytics,
    sub: [
      {
        title: 'История стримов',
        tab: 'stream-history'
      },
      {
        title: 'Аналитика стримов',
        tab: 'stream-analytic'
      }
    ]
  },
  {
    title: 'Настройки',
    icon: IoSettings,
    sub: [
      {
        title: 'Канал',
        tab: 'channel'
      },
      {
        title: 'Модерация',
        tab: 'moderation'
      },
      {
        title: 'Валюта',
        tab: 'currency'
      },
      {
        title: 'Платные подписки',
        tab: 'subscription'
      },
      {
        title: 'Эмодзи',
        tab: 'emotions'
      }
    ]
  }
];

interface IDashboardSidebar {
  setActiveTab: React.Dispatch<React.SetStateAction<TDashboardTabs>>;
  activeTab: TDashboardTabs;
}

const DashboardSidebar: FC<IDashboardSidebar> = ({
  setActiveTab,
  activeTab
}) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (title: string) => {
    setOpenItems(prevState => ({
      ...prevState,
      [title]: !prevState[title]
    }));
  };

  return (
    <div>
      <SidebarProvider>
        <Sidebar className="mt-[93px] bg-Modal  border-r-[1px] border-Border flex ">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-[16px] text-White mb-[20px]">
                Панель управления автора
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem className="cursor-pointer">
                    <SidebarMenuButton
                      asChild
                      size="lg"
                      className="hover:bg-transparent active:bg-transparent hover:text-White duration-100"
                      onClick={() => setActiveTab('translation')}
                    >
                      <div className="flex ">
                        <CiStreamOn className="text-White" />
                        <span className="text-[15px] text-White font-medium">
                          Управление трансляцией
                        </span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {items.map(item => (
                    <Collapsible
                      key={item.title}
                      open={openItems[item.title] || false}
                      onOpenChange={() => toggleItem(item.title)}
                    >
                      <SidebarMenuItem className="cursor-pointer">
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            asChild
                            size="lg"
                            className="hover:bg-transparent active:bg-transparent hover:text-White duration-100"
                          >
                            <div className="flex ">
                              <item.icon className="text-White" />
                              <span className="text-[15px] text-White font-medium">
                                {item.title}
                              </span>
                            </div>
                          </SidebarMenuButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.sub?.map(sub => (
                              <SidebarMenuSubItem key={sub.title}>
                                <SidebarMenuButton
                                  asChild
                                  size="lg"
                                  className="hover:bg-transparent active:bg-transparent hover:text-White duration-100"
                                  onClick={() =>
                                    setActiveTab(sub.tab as TDashboardTabs)
                                  }
                                >
                                  <span className="text-[15px] text-White font-medium">
                                    {sub.title}
                                  </span>
                                </SidebarMenuButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    </div>
  );
};

export default DashboardSidebar;
