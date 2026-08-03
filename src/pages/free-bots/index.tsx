// src/pages/free-bots/index.tsx
import React from 'react';
import { observer } from 'mobx-react-lite';
import { load, save_types } from '@/external/bot-skeleton';
import { DBOT_TABS } from '@/constants/bot-contents';
import { useStore } from '@/hooks/useStore';

import hitRunOver2Xml from './bots/hit-run-over-2.xml';
import over1Xml from './bots/over-1.xml';
import tiffTimeV37Xml from './bots/tiff-time-v3-7.xml';
import under7HitXml from './bots/under-7-hit.xml';
import under8Xml from './bots/under-8.xml';

type FreeBot = {
    id: string;
    name: string;
    description: string;
    xml: string;
};

const FREE_BOTS: FreeBot[] = [
    { id: 'hit-run-over-2', name: 'Hit & Run Over 2', description: 'Digit Over 2 strategy.', xml: hitRunOver2Xml },
    { id: 'over-1', name: 'Over 1', description: 'Digit Over 1 strategy.', xml: over1Xml },
    { id: 'tiff-time-v3-7', name: 'TIFF Time V3-7', description: 'Time-based strategy.', xml: tiffTimeV37Xml },
    { id: 'under-7-hit', name: 'Under 7 Hit', description: 'Digit Under 7 strategy.', xml: under7HitXml },
    { id: 'under-8', name: 'Under 8', description: 'Digit Under 8 strategy.', xml: under8Xml },
];

const FreeBots = observer(() => {
    const { dashboard, run_panel } = useStore();
    const { setActiveTab } = dashboard;
    const { is_running, onStopButtonClick } = run_panel;
    const [loadingId, setLoadingId] = React.useState<string | null>(null);

    const handleLoad = async (bot: FreeBot) => {
        if (is_running || loadingId) return;
        setLoadingId(bot.id);
        try {
            const workspace = window.Blockly?.derivWorkspace;
            if (!workspace) {
                setLoadingId(null);
                return;
            }

            setActiveTab(DBOT_TABS.BOT_BUILDER);

            await load({
                block_string: bot.xml,
                drop_event: {},
                workspace,
                from: save_types.LOCAL,
                file_name: bot.name,
                strategy_id: bot.id,
                showIncompatibleStrategyDialog: false,
                show_snackbar: false,
            });
            workspace.strategy_to_load = bot.xml;
        } finally {
            setLoadingId(null);
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>🤖 Free Bots</h1>
            <p style={{ opacity: 0.8, fontSize: 14 }}>
                Tap Load to bring a bot into Bot Builder, then press the Run button below to start it.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {FREE_BOTS.map(bot => (
                    <div
                        key={bot.id}
                        style={{
                            border: '1px solid #444',
                            borderRadius: 8,
                            padding: 14,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 12,
                        }}
                    >
                        <div>
                            <div style={{ fontWeight: 600 }}>{bot.name}</div>
                            <div style={{ fontSize: 12, opacity: 0.7 }}>{bot.description}</div>
                        </div>
                        <button
                            type="button"
                            onClick={() => handleLoad(bot)}
                            disabled={is_running || loadingId !== null}
                            style={{
                                background: '#2a2',
                                color: '#fff',
                                border: 'none',
                                borderRadius: 6,
                                padding: '6px 16px',
                                cursor: 'pointer',
                                opacity: is_running || loadingId !== null ? 0.6 : 1,
                            }}
                        >
                            {loadingId === bot.id ? 'Loading…' : 'Load'}
                        </button>
                    </div>
                ))}
            </div>

            {is_running && (
                <div style={{ marginTop: 20 }}>
                    <button
                        type="button"
                        onClick={onStopButtonClick}
                        style={{
                            background: '#a22',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 6,
                            padding: '6px 16px',
                            cursor: 'pointer',
                        }}
                    >
                        Stop Bot
                    </button>
                </div>
            )}
        </div>
    );
});

export default FreeBots;
