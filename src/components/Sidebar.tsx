import React, { useState } from 'react';
import { LayoutGrid, FileText, Clock, Zap, Book, BarChart3, Rocket, MessageSquare, Settings, ExternalLink } from 'lucide-react';

type MenuItem = {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  submenu?: {
    sections: {
      title?: string;
      items: {
        label: string;
        isHighlighted?: boolean;
        external?: boolean;
      }[];
    }[];
  };
};

export const Sidebar = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isPopoverHovered, setIsPopoverHovered] = useState(false);

  const handleMouseLeave = (index: number) => {
    if (!isPopoverHovered) {
      setHoveredItem(null);
    }
  };

  const handlePopoverMouseEnter = () => {
    setIsPopoverHovered(true);
  };

  const handlePopoverMouseLeave = () => {
    setIsPopoverHovered(false);
    setHoveredItem(null);
  };

  const navItems: MenuItem[] = [
    { 
      icon: LayoutGrid, 
      label: 'Dashboard',
      isActive: true,
      submenu: {
        sections: [
          {
            items: [
              { label: 'Overview' },
              { label: 'Analytics' },
              { label: 'Reports' }
            ]
          },
          {
            title: 'Quick Actions',
            items: [
              { label: 'Create Report' },
              { label: 'Export Data', isHighlighted: true },
              { label: 'Share Dashboard' }
            ]
          }
        ]
      }
    },
    { 
      icon: FileText, 
      label: 'Documents',
      submenu: {
        sections: [
          {
            items: [
              { label: 'All Documents' },
              { label: 'Shared with me' },
              { label: 'Recent' }
            ]
          },
          {
            title: 'Document Types',
            items: [
              { label: 'Reports' },
              { label: 'Spreadsheets' },
              { label: 'Presentations' }
            ]
          }
        ]
      }
    },
    { 
      icon: Clock, 
      label: 'History',
      submenu: {
        sections: [
          {
            items: [
              { label: 'Recent Activity' },
              { label: 'Last 30 Days' },
              { label: 'Custom Range' }
            ]
          }
        ]
      }
    },
    { 
      icon: Zap, 
      label: 'Energy',
      submenu: {
        sections: [
          {
            items: [
              { label: 'Consumption' },
              { label: 'Efficiency' },
              { label: 'Reports' }
            ]
          },
          {
            title: 'Management',
            items: [
              { label: 'Goals' },
              { label: 'Alerts', isHighlighted: true },
              { label: 'Settings' }
            ]
          }
        ]
      }
    },
    { 
      icon: Book, 
      label: 'Knowledge Base',
      submenu: {
        sections: [
          {
            items: [
              { label: 'Articles' },
              { label: 'Tutorials' },
              { label: 'FAQs' }
            ]
          },
          {
            title: 'Resources',
            items: [
              { label: 'Documentation', external: true },
              { label: 'API Reference', external: true },
              { label: 'Support' }
            ]
          }
        ]
      }
    },
    { 
      icon: BarChart3, 
      label: 'Analytics',
      submenu: {
        sections: [
          {
            items: [
              { label: 'Performance' },
              { label: 'Trends' },
              { label: 'Forecasts' }
            ]
          },
          {
            title: 'Reports',
            items: [
              { label: 'Monthly' },
              { label: 'Quarterly' },
              { label: 'Annual' }
            ]
          }
        ]
      }
    },
    { 
      icon: Rocket, 
      label: 'Projects',
      submenu: {
        sections: [
          {
            items: [
              { label: 'Active Projects' },
              { label: 'Archived' },
              { label: 'Templates' }
            ]
          },
          {
            title: 'Actions',
            items: [
              { label: 'New Project' },
              { label: 'Import', external: true },
              { label: 'Export', external: true }
            ]
          }
        ]
      }
    },
    { 
      icon: MessageSquare, 
      label: 'Messages',
      submenu: {
        sections: [
          {
            items: [
              { label: 'Inbox' },
              { label: 'Sent' },
              { label: 'Drafts' }
            ]
          },
          {
            title: 'Filters',
            items: [
              { label: 'Important' },
              { label: 'Unread', isHighlighted: true },
              { label: 'Archived' }
            ]
          }
        ]
      }
    },
    { 
      icon: Settings, 
      label: 'Settings',
      submenu: {
        sections: [
          {
            items: [
              { label: 'Account' },
              { label: 'Profile' },
              { label: 'Security' }
            ]
          },
          {
            title: 'System',
            items: [
              { label: 'Preferences' },
              { label: 'Notifications' },
              { label: 'Integrations' }
            ]
          },
          {
            items: [
              { label: 'Terms of Service', external: true },
              { label: 'Privacy Policy', external: true },
              { label: 'Help Center', external: true }
            ]
          }
        ]
      }
    }
  ];

  return (
    <div className="w-16 bg-white border-r flex flex-col items-center py-4 space-y-8">
      {navItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <button
              className={`p-2 rounded-lg hover:bg-gray-50 transition-colors ${
                item.isActive ? 'text-purple-600 bg-purple-50' : 'text-gray-500'
              }`}
            >
              <Icon size={20} />
            </button>
            
            {/* Popover */}
            {hoveredItem === index && item.submenu && (
              <div 
                className="absolute left-14 top-0 bg-white rounded-lg shadow-lg py-4 whitespace-nowrap z-50 border min-w-[200px]"
                onMouseEnter={handlePopoverMouseEnter}
                onMouseLeave={handlePopoverMouseLeave}
              >
                {/* Arrow */}
                <div className="absolute left-0 top-6 -translate-x-1 w-2 h-2 bg-white transform rotate-45 border-l border-t" />
                
                {/* Submenu content */}
                <div className="relative">
                  {item.submenu.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      {section.title && (
                        <div className="px-4 py-2 text-sm text-gray-500">{section.title}</div>
                      )}
                      <div className="mb-2">
                        {section.items.map((subItem, itemIndex) => (
                          <button
                            key={itemIndex}
                            className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center justify-between ${
                              subItem.isHighlighted ? 'bg-gray-50' : ''
                            }`}
                          >
                            <span className="text-gray-700">{subItem.label}</span>
                            {subItem.external && <ExternalLink size={14} className="text-gray-400" />}
                          </button>
                        ))}
                      </div>
                      {sectionIndex < item.submenu.sections.length - 1 && (
                        <div className="mx-4 my-2 border-t border-gray-100" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};